import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from "gatsby-link";
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
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const [state, setState] = useState({
    Nom: null,
    Courriel: null,
    Téléphone: null,
    Message: null,
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
      body: encode({
        "form-name": "Contact v2",
        ...state
      })
    })
      .then(() => {
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
        name="Contact v2"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="Contact v2" value="Contact v2" />
        <div className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <label className="block mb-4">
          <span>Nom*</span>
          <input
            type="text"
            {...register("Nom", {
              required: "Required"
            })}
            className={`${errors.Nom ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
          />
          {errors.Nom && <span className="text-red-600 text-sm">Entrez votre nom</span>}
        </label>

        <label className="block mb-4">
          <span>Courriel*</span>
          <input
            type="text"
            {...register("Courriel", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: ""
              }
            })}
            className={`${errors.Courriel ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
          />
          {errors.Courriel && <span className="text-red-600 text-sm">Courriel invalide</span>}
        </label>

        <label className="block mb-4">
          <span>Téléphone</span>
          <input
            type="tel"
            name="Téléphone"
            className={`form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span>Message*</span>
          <textarea
            {...register("Message", {
              required: true
            })}
            className={`${errors.Message ? `border-red-600` : ``} form-textarea mt-1 block w-full text-lg`}
            id="message"
            placeholder="Comment pouvons-nous vous aidez ?"
            rows={4}
            onChange={handleChange}
          />
          {errors.Message && <span className="text-red-600 text-sm">Entrez un message</span>}
        </label>

        <label>
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

export default ContactForm;
