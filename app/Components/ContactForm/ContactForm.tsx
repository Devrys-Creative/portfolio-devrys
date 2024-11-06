'use client';

import { FieldValues, useForm } from "react-hook-form";
import "./contactForm.scss";
import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactForm = () => {
    const { handleSubmit, register, formState: { errors, dirtyFields, isValid }, watch } = useForm({
        mode: "onChange",
    });
    const onSubmit = (values: FieldValues) => console.log(values);

    const requiredMessage = "Ce champ est nécessaire";

    const [textareaCharacters,setTextareaCharacters] = useState(0);

    const textareaMailValue = watch("mail","");
    
    useEffect(()=>{
        setTextareaCharacters(textareaMailValue.length);
    },[textareaMailValue])

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="contact-form__input-error">{errors.name && errors.name.message as string}</div>
                <input type="text"
                    {...register("name", {
                        required: requiredMessage,
                        pattern: {
                            value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
                            message: "Nom invalide"
                        }
                    })}
                    placeholder="Nom"
                    className={`contact-form__input ${errors.name && 'contact-form__input--error'} ${!errors.name && dirtyFields.name && 'contact-form__input--valid'}`}
                />
            </div>

            <div>
                <div className="contact-form__input-error">{errors.company && errors.company.message as string}</div>
                <input type="text"
                    {...register("company", {
                        pattern: {
                            value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9' -]*$/,
                            message: "Le nom de la société présente des caractères non autorisés"
                        }
                    })}
                    placeholder="Société (facultatif)"
                    className={`contact-form__input ${errors.company && 'contact-form__input--error'} ${!errors.company && dirtyFields.company && 'contact-form__input--valid'}`}
                />
            </div>

            <div>
                <div className="contact-form__input-error">{errors.email && errors.email.message as string}</div>
                <input type="email"
                    {...register("email", {
                        required: requiredMessage,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse e-mail invalide"
                        }
                    })}
                    placeholder="Adresse e-mail"
                    className={`contact-form__input ${errors.email && 'contact-form__input--error'} ${!errors.email && dirtyFields.email && 'contact-form__input--valid'}`}
                />
            </div>

            <div>
                <div className="contact-form__input-error">{errors.object && errors.object.message as string}</div>
                <select id="object"
                    {...register("object", {
                        required: requiredMessage,
                    })}
                    className={`contact-form__select ${errors.object && 'contact-form__select--error'} ${!errors.object && dirtyFields.object && 'contact-form__select--valid'}`}
                >
                    <option selected hidden value="" className="contact-form__select__placeholder">Pourquoi souhaitez-vous me contacter ?</option>
                    <option value="mission">Proposer une mission (freelance)</option>
                    <option value="job">Proposer un poste</option>
                    <option value="other">Autre</option>
                </select>
            </div>

            <div>
                <div className={`contact-form__textarea-characters ${errors.mail && 'contact-form__textarea-characters--error'}`}>{textareaCharacters} / 2000 {errors.mail && errors.mail.message as string}</div>
                <textarea
                    {...register("mail", {
                        required: requiredMessage,
                        maxLength: { value: 2000, message: "Votre message est trop long !" },
                    })}
                    placeholder="Votre message en 2000 caractères maximum :)"
                    className={`contact-form__textarea ${errors.mail && 'contact-form__textarea--error'} ${!errors.mail && dirtyFields.mail && 'contact-form__textarea--valid'}`}
                >
                </textarea>
            </div>

            <button className="contact-form__button" disabled={!isValid}>{<FontAwesomeIcon icon={faEnvelope} /> } Envoyer le message</button>
        </form>
    )
}