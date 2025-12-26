import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import ReCAPTCHA from "react-google-recaptcha";

import { Alert, Loader, SEO } from "../components";
import useAlert from "../hooks/useAlert";
import { Fox } from "../models";

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size when window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaValue(null);
    showAlert({
      show: true,
      text: "reCAPTCHA has expired, please verify again",
      type: "danger",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      showAlert({
        show: true,
        text: "Please complete the reCAPTCHA verification",
        type: "danger",
      });
      return;
    }

    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gouranga Das",
          from_email: form.email,
          to_email: "gouranga.samrat@gmail.com",
          message: form.message,
          "g-recaptcha-response": recaptchaValue,
          sent_date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          // Show confetti
          setShowConfetti(true);

          // Reset recaptcha
          recaptchaRef.current?.reset();
          setRecaptchaValue(null);

          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            setShowConfetti(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <motion.section
      className="relative flex lg:flex-row flex-col max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]}
        />
      )}
      <SEO
        title="Contact | Gouranga Das Samrat"
        description="Get in touch with Gouranga Das Samrat for web development projects and collaborations"
        name="Gouranga Das Samrat"
        type="website"
      />

      <motion.div
        className="flex-1 min-w-[50%] flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="head-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get in Touch
        </motion.h1>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.label
            className="text-black-500 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Name
            <motion.input
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              whileFocus={{ scale: 1.02 }}
            />
          </motion.label>
          <motion.label
            className="text-black-500 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Email
            <motion.input
              type="email"
              name="email"
              className="input"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              whileFocus={{ scale: 1.02 }}
            />
          </motion.label>
          <motion.label
            className="text-black-500 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Your Message
            <motion.textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              whileFocus={{ scale: 1.02 }}
            />
          </motion.label>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              onExpired={handleRecaptchaExpired}
              theme="light"
              className="transform scale-100 md:scale-100 mx-auto"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading || !recaptchaValue}
            className={`btn ${
              !recaptchaValue || loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      {alert.show && <Alert {...alert} />}
    </motion.section>
  );
};

export default Contact;
