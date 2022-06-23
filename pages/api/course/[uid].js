// All firebase objects
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Scripts and libraries
import _ from "lodash";

// This is a reuseable function throught all API routes that
// takes in an object of object (standard data-storing method)
// for firebase, and returns a new array of objects
function filterById(list, uid) {
  let newList = [];

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
      await get(child(ref(database), `course/`)).then((snapshot) => {
        if (snapshot.exists()) {
          // We then filter out the user's card(s) and return those values
          res.status(200).json(filterById(snapshot.val(), uid));
        } else {
          res.status(200).json({ message: "No tuition found" });
        }
      });
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
  }

  //  res.status(200).json({});
}
