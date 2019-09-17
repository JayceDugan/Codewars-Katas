function songDecoder(song) {
  let words = song.split('WUB');

  let remix = words.filter((word) => {
    return word != '';
  });

  return remix.join(' ');
}
