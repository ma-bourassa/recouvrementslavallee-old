import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const encode = (data) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
};

const ContactForm = () => {
  const { handleSubmit, register, reset, errors } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const [state, setState] = useState({
    nom: null,
    courriel: null,
    telephone: null,
    message: null,
    file: null
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const onSubmit = () => {
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact form",
        ...state
      })
    })
      .then(() => {
        reset();
        navigate("/success/");
      })
      .catch(() => {
        setSubmitting(false);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };

  return (
    <div className="w-full lg:w-2/3 p-6 text-lg font-semibold">
      <form
        method="post"
        name="Contact form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="Contact form" />
        <div className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <label className="block mb-4">
          <span>Nom*</span>
          <input
            type="text"
            name="nom"
            className={`${errors.Nom ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
            ref={register({
              required: "Required"
            })}
          />
          {errors.Nom && <span className="text-red-600 text-sm">Entrez votre nom</span>}
        </label>

        <label className="block mb-4">
          <span>Courriel*</span>
          <input
            type="text"
            name="courriel"
            className={`${errors.Courriel ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: ""
              }
            })}
          />
          {errors.Courriel && <span className="text-red-600 text-sm">Courriel invalide</span>}
        </label>

        <label className="block mb-4">
          <span>Téléphone (optionnel)</span>
          <input
            type="tel"
            name="telephone"
            className={`form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span>Message*</span>
          <textarea
            name="message"
            className={`${errors.Message ? `border-red-600` : ``} form-textarea mt-1 block w-full text-lg`}
            id="message"
            placeholder="Comment pouvons-nous vous aidez ?"
            rows={4}
            onChange={handleChange}
            ref={register({
              required: true
            })}
          />
          {errors.Message && <span className="text-red-600 text-sm">Entrez un message</span>}
        </label>

        <label className="block mb-4">
          <span className="block">
            Joindre vos fichiers <span className="hidden lg:inline">(plans, photos, etc.)</span>
          </span>

          <span className="mt-1 btn bg-transparent border border-grey hover:bg-grey hover:text-white focus:outline-none">
            <FontAwesomeIcon icon="cloud-upload-alt" className="mr-2" />
            <span className="mt-2 text-base leading-normal">Selectionner un fichier</span>
          </span>
          <input type="file" name="file" className="hidden" onChange={handleAttachment} />
        </label>

        {state.file && (
          <div className="block mt-2">
            <FontAwesomeIcon icon="check" color="green" className="mr-2" />
            <span className="font-semibold">{state.file.name}</span>
          </div>
        )}

        <div className="block mb-4">
          <div data-netlify-recaptcha="true"></div>
        </div>

        <button
          id="submitBtn"
          type="submit"
          className={`${submitting ? `opacity-50 cursor-default` : ``} btn btn-blue mt-8 block focus:outline-none`}
          disabled={submitting}
        >
          {submitting && <FontAwesomeIcon icon="circle-notch" spin className="mr-2" />}
          Envoyer
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  showSuccessToast: PropTypes.func
};

export default ContactForm;
