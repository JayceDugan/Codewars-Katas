Array.prototype.sameStructureAs = function (other) {
  if(!this || !other) { return false; }
  if(this.length !== other.length) { return false; }

  for(var pointer = 0; pointer < this.length; pointer++) {

    if(typeof this[pointer] !== typeof other[pointer]) {
      if(!typeof this[pointer] == "string" && typeof other[pointer] == "number") {
        return false;
      }
    }

    if(isArray(this[pointer]) && !isArray(other[pointer]) || !isArray(this[pointer]) && isArray(other[pointer])) { return false; }

    if(isArray(this[pointer]) && isArray(other[pointer])) {
      if(!this[pointer].sameStructureAs(other[pointer])) { return false; }
    }
  }

  return true;
};
