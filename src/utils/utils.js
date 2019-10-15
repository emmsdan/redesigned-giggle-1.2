// could search through all the object properties to check if a similar item exist
export function search(value, object) {
  for (const key in object) {
    if (typeof object[key] === 'object'){
      if(search(value, object[key])){
        return object;
      }
    } else if (typeof object[key] === 'string'){
      if (object[key].toLowerCase().includes(value.toLowerCase())) {
        return object;
      }
    }
  }
  return false;
}

export function formatUser(users) {
  return users.map(user => {
    const { name, email, picture, location } = user;
    return {
      name: `${name.title}. ${name.last} ${name.first}`,
      email,
      photo: picture.medium,
      location: `${location.street.number} ${location.street.name} ${location.city}`,
      state: `${location.state} ${location.country}`
    }
  });
}