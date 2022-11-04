const {add} = require("../functions/addition");
const {substract} = require("../functions/substraction");
const {multiply} = require("../functions/multiplication");

exports.solve = async function (req, res) {
  try {
    const data  = req.body;
    if (data.operation_type === "addition") {
      const result = await add(data.x,data.y);
      return res
        .json({
          slackUsername: "Rahdeg",
          result: result,
          operation_type: data.operation_type,
        });
    } else if (data.operation_type === "subtraction") {
        const result = substract(data.x,data.y);
      return res
        .json({
          slackUsername: "Rahdeg",
          result: result,
          operation_type: data.operation_type,
        });
    } else {
        const result = multiply(data.x,data.y);
      return res
        .json({
          slackUsername: "Rahdeg",
          result: result,
          operation_type: data.operation_type,
        });
    }
  } catch {
    console.log(error);
  }
};
