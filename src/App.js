import "./App.css";
import { motion } from "framer-motion";
import React from "react";

function App() {
  // const [rotate, setRotate] = React.useState(false);

  // function plzRotate() {
  //   setRotate(!rotate);
  // }
  return (
    // <div className="App">
    //   <motion.div className='block'  animate={{
    //   scale: rotate?[1, 2, 2, 1, 1]:1,
    //   rotate: rotate?[0, 0, 270, 270, 0]:0,
    //   borderRadius: rotate?["20%", "20%", "50%", "50%", "20%"]:0,
    // }}onClick={plzRotate}>

    //   </motion.div>
    // </div>
    <div>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        TEST
      </motion.div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
