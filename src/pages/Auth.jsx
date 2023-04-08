import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ImageAsideAuth from "../assets/img/auth.jpg";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

const Auth = () => {
  const location = useLocation();
  return (
    <main className="main main--auth">
      <aside className="aside aside--auth">
        <img className="aside__img" src={ImageAsideAuth} alt="Aside auth" />
      </aside>
      <AnimatePresence mode="popLayout">
        <motion.section
          initial={{
            translateX: "100%",
          }}
          animate={{
            translateX: 0,
          }}
          exit={{
            translateX: "100%",
          }}
          className="section section--auth"
          key={location.key}
        >
          <AnimatedOutlet />
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default Auth;
