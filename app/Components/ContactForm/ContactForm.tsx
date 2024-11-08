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
            <fieldset className="contact-form__fieldset">
                <div>
                    <div className="contact-form__fieldset__input-error">{errors.name && errors.name.message as string}</div>
                    <input type="text"
                        {...register("name", {
                            required: requiredMessage,
                            pattern: {
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
                                message: "Nom invalide"
                            }
                        })}
                        placeholder="Nom"
                        className={`contact-form__fieldset__input ${errors.name && 'contact-form__fieldset__input--error'} ${!errors.name && dirtyFields.name && 'contact-form__fieldset__input--valid'}`}
                    />
                </div>

                <div>
                    <div className="contact-form__fieldset__input-error">{errors.company && errors.company.message as string}</div>
                    <input type="text"
                        {...register("company", {
                            pattern: {
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9' -]*$/,
                                message: "Caractères non autorisés"
                            }
                        })}
                        placeholder="Société (facultatif)"
                        className={`contact-form__fieldset__input ${errors.company && 'contact-form__fieldset__input--error'} ${!errors.company && dirtyFields.company && 'contact-form__fieldset__input--valid'}`}
                    />
                </div>

                <div>
                    <div className="contact-form__fieldset__input-error">{errors.email && errors.email.message as string}</div>
                    <input type="email"
                        {...register("email", {
                            required: requiredMessage,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Adresse e-mail invalide"
                            }
                        })}
                        placeholder="Adresse e-mail"
                        className={`contact-form__fieldset__input ${errors.email && 'contact-form__fieldset__input--error'} ${!errors.email && dirtyFields.email && 'contact-form__fieldset__input--valid'}`}
                    />
                </div>

                <div>
                    <div className="contact-form__fieldset__input-error">{errors.phone && errors.phone.message as string}</div>
                    <input type="tel"
                        {...register("phone", {
                            pattern: {
                                value: /^[0-9.\- ]{10,}$/,
                                message: "Au moins 10 caractères (chiffres, espaces, tirets et points)"
                            }
                        })}
                        placeholder="Numéro de téléphone (facultatif)"
                        className={`contact-form__fieldset__input ${errors.phone && 'contact-form__fieldset__input--error'} ${!errors.phone && dirtyFields.phone && 'contact-form__fieldset__input--valid'}`}
                    />
                </div>
            </fieldset>
            <fieldset className="contact-form__fieldset">
                <div>
                    <div className="contact-form__fieldset__input-error">{errors.object && errors.object.message as string}</div>
                    <select id="object"
                        {...register("object", {
                            required: requiredMessage,
                        })}
                        className={`contact-form__fieldset__select ${errors.object && 'contact-form__fieldset__select--error'} ${!errors.object && dirtyFields.object && 'contact-form__fieldset__select--valid'}`}
                        defaultValue=""
                    >
                        <option hidden value="" className="contact-form__fieldset__select__placeholder">Pourquoi souhaitez-vous me contacter ?</option>
                        <option value="mission">Proposer une mission (freelance)</option>
                        <option value="job">Proposer un poste</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                <div>
                    <div className={`contact-form__fieldset__textarea-characters ${errors.mail && 'contact-form__fieldset__textarea-characters--error'}`}>{textareaCharacters} / 2000 {errors.mail && errors.mail.message as string}</div>
                    <textarea
                        {...register("mail", {
                            required: requiredMessage,
                            maxLength: { value: 2000, message: "Votre message est trop long !" },
                        })}
                        className={`contact-form__fieldset__textarea ${errors.mail && 'contact-form__fieldset__textarea--error'} ${!errors.mail && dirtyFields.mail && 'contact-form__fieldset__textarea--valid'}`}
                    >
                    </textarea>
                </div>
            </fieldset>

            <button className="contact-form__button" disabled={!isValid}>{<FontAwesomeIcon icon={faEnvelope} /> } Envoyer le message</button>
        </form>
    )
}