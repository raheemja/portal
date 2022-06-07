export function encrypt(o, salt) {
  o = JSON.stringify(o).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return encodeURI(process.env.NEXT_PUBLIC_ENC_KEY + o.join(""));
}

export function decrypt(o) {
  o = decodeURI(o);
  if (
    process.env.NEXT_PUBLIC_ENC_KEY &&
    o.indexOf(process.env.NEXT_PUBLIC_ENC_KEY) != 0
  )
    throw new Error("object cannot be decrypted");
  o = o.substring(process.env.NEXT_PUBLIC_ENC_KEY.length).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return JSON.parse(o.join(""));
}
