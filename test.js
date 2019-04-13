extractElements = (msg, links) => {
    let minIndex = 0, length = 0, part = [], j = 0, maxLenght = msg.length;
    //console.log('maxLenght: ', maxLenght);
    part = [msg];
    for(let i=0;i<links.length;i++) {
      if (msg.indexOf(links[i].key) != -1) {
        length = (msg.indexOf(links[i].key) != -1) ? msg.indexOf(links[i].key): msg.length;
        //console.log('length: ', length);
        part[j] = msg.slice(minIndex, length);
        j++;
        part[j] = links[i].key;
        //console.log('part['+j+']: ', part[j]);
        minIndex = links[i].key.length + length;
        //console.log('minIndex: ', minIndex,'\n');
        j++;
      }
    }

    //console.log('string: ',part.join(''));
    //console.log('array: ',part);
    return part;
}

  sortElement = (message, links) => {
    const keys = Array.from(links, link => link.key);
    let minLength = 0, maxLength = 0, msg = [], j = 0, part =  [];
  
    for (const key of keys) {
      pos = message.indexOf(key);
      if (pos != -1 ) {
          part[pos] = key;
      }
    }

    res = [];
    part.forEach(function(key) {
      maxLength = (message.indexOf(key) != -1) ? message.indexOf(key): message.length;
      msg[j] = message.slice(minLength, maxLength);
      minLength = maxLength + key.length;
      j++;
      msg[j] = key;
      j++;
    });
  
  return part;
}

renderWrappedLinks = () => {
  const links = [
    {id: 1, key: '%2FA%', title: 'here', link: '/2fa' },
    {id: 2, key: '%DOC%', title: 'there', link: '/doc' },
  ];
  //const message = 'two facttor auth %2FA% and uploading files %DOC%';
  //const message = 'two facttor auth %2FA% and uploading files';
  const message = 'two facttor auth %DOC% and uploading files %2FA%';
  //return this.extractElements(message, links);
  return sortElement(message, links);
}

const getLinkByKey = (links, value) => {
    return links.filter(link => link.key == value);
}