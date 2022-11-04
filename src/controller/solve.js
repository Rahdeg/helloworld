exports.solve = async function (req, res) {
    try {
      const data = req.body;
      if (email_exists) {
        return res.status(400).json({ msg: "email already exists" });
      }else if (condition) {
        
      }else{
        
      }

           
    } catch {
      console.log(error);
    }
  };