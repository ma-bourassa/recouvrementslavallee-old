import React, { useState } from "react";
import { navigate } from "gatsby-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const [submitting, toggleSubmit] = useState(false);

  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const onSubmit = () => {
    toggleSubmit(true);
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": "Contact v1",
        ...state,
      }),
    })
      .then(() => {
        navigate("/success/");
      })
      .catch(() => {
        toggleSubmit(false);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };

  return (
    <div className="w-full lg:w-2/3 p-6 text-lg font-semibold">
      <form
        method="post"
        name="Contact v1"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="Contact v1" value="Contact v1" />
        <div className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <label className="block mb-4">
          <span>Nom</span>
          <input
            type="text"
            name="Nom"
            className={`${errors.Nom ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
            ref={register({
              required: true,
            })}
          />
          {errors.Nom && <span className="text-red-600 text-sm">Entrez votre nom</span>}
        </label>

        <label className="block mb-4">
          <span>Téléphone</span>
          <input
            type="tel"
            name="Téléphone"
            className={`${errors.Téléphone ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
            ref={register({
              required: true,
            })}
          />
          {errors.Téléphone && <span className="text-red-600 text-sm">Entrez votre numéro de téléphone</span>}
        </label>

        <label className="block mb-4">
          <span>Courriel</span>
          <input
            type="text"
            name="Courriel"
            className={`${errors.Courriel ? `border-red-600` : ``} form-input mt-1 block w-full text-lg`}
            onChange={handleChange}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
          />
          {errors.Courriel && <span className="text-red-600 text-sm">Courriel invalide</span>}
        </label>

        <label className="block mb-4">
          <span>Message</span>
          <textarea
            name="Message"
            className={`${errors.Message ? `border-red-600` : ``} form-textarea mt-1 block w-full text-lg`}
            id="message"
            placeholder="Précisez votre demande"
            rows="4"
            onChange={handleChange}
            ref={register({
              required: true,
            })}
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
