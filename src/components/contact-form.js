import React, { useState } from "react";
import { navigate } from "gatsby-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function ContactForm() {
  const [submitting, toggleSubmit] = useState(false);

  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleSubmit(!submitting);
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(() => {
        toggleSubmit(!submitting);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };

  return (
    <div className="w-full md:w-2/3 p-6">
      <form
        name="Contact v1"
        action="/success/"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="Contact v1" />
        <div className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <label className="block">
          <span className="text-gray-700 font-semibold">Nom *</span>
          <input
            type="text"
            name="Nom"
            className="form-input mt-1 mb-4 block w-full"
            required
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Téléphone *</span>
          <input
            type="tel"
            name="Téléphone"
            className="form-input mt-1 mb-4 block w-full"
            required
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Courriel *</span>
          <input
            type="email"
            name="Courriel"
            className="form-input mt-1 mb-4 block w-full"
            required
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Message</span>
          <textarea
            name="Message"
            className="form-textarea mt-1 mb-4 block w-full"
            id="message"
            placeholder="Précisez votre demande"
            rows="4"
            onChange={handleChange}
          />
        </label>

        <label>
          <span className="block text-gray-700 font-semibold">
            Joindre vos fichiers <span className="hidden md:inline">(plans, photos, etc.)</span>
          </span>

          <span className="mt-1 btn bg-transparent border-blue border border-blue-600 hover:bg-blue-600 hover:text-white ">
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
          className={`${submitting ? `opacity-50 cursor-not-allowed` : ``} btn btn-blue mt-8 block `}
        >
          {submitting && <FontAwesomeIcon icon="circle-notch" spin className="mr-2" />}
          Envoyer
        </button>
      </form>
    </div>
  );
}
