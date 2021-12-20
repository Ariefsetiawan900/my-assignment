const sampleObject = {
  data: {
    rfq: {
      tender: {
        trade_confirmation: {
          location_1: {
            id: 44,
            name: "makmur",
          },
          location_2: {
            id: 21,
            name: "abadi",
          },
        },
      },
    },
  },
};

const isContains = (obj, target) => {
  const result = (obj) => {
    for (const [k, v] of Object.entries(obj)) {
      if (v === target) {
        return true;
      }

      if (typeof v === "object") {
        const f = result(v);

        if (f) return f;
      }
    }
  };
  return result(obj) ? result(obj) : false;
};

console.log(isContains(sampleObject,44)); //true
console.log(isContains(sampleObject,"abadi")); //true 
console.log(isContains(sampleObject,"jaya")); //false

// noted!!
// if you no't have nodejs your pc, you can access web : https://es6console.com/
// open website then copy my code and paste & run




