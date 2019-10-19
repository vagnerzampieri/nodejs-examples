import util from "util";

import { exec } from "child_process";

// Using callback ... is not recommended
// exec("ls /", (err, stdout, stderr) => {
//   if (err) {
//     process.exit(1);
//   }
//   console.log(stdout);
// });

// Using Promise
const execP = util.promisify(exec);

const main = async () => {
  try {
    const { stdout, stderr } = await execP("ls /");
    console.log(stdout);
  } catch (error) {
    process.exit(1);
  }
};

main();
