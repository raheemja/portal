// All firebase objects
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref as r } from "firebase/storage";

// Scripts and libraries
import _ from "lodash";

// This is a reuseable function throught all API routes that
// takes in an object of object (standard data-storing method)
// for firebase, and returns a new array of objects
function filterById(list, uid) {
  let newList = [];
  const storage = getStorage();

  // Iterate though each object in the object
  Object.values(list).forEach((item, i) => {
    if (_.isEqual(item.uid, uid)) {
      newList.push(item);
    }
  });
}

export default async function handler(req, res) {
  // Attempts to extract the User ID, if sent
  const { uid } = req.query;

  // Database Object
  const database = getDatabase();

  switch (req.method) {
    case "GET":
      break;

    case "PUT":
      break;

    case "PATCH":
      break;

    case "POST":
      break;

    case "HEAD":
      break;

    case "DELETE":
      break;

    default:
      break;
  }

  //  res.status(200).json({});
}
