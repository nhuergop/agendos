import './profile.css';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router";
import {httpGet} from "../../utils/httpFunctions";
import {useEffect, useState} from "react";
// import {render} from "@testing-library/react";

const Perfil =(props) => {
    const location = useLocation()
    const contact_id = location.profileProps.profile_id
    const [contact,setContact] = useState([])

	const fetchProfile = () => {
		httpGet(`api/contacts/${contact_id}`)
		  .then((res) => setContact(res.data))
          }

	useEffect(fetchProfile, [])

        return (
            <div className="containerrr">
                <header className="hero">
                    <Link to={'/home'}>
                        <i className="fas fa-arrow-circle-left back-btn"></i>
                    </Link>
                    <div className="hero-info">
                        <h1 className="name">{contact.name}</h1>
                        <img width='150' height='150' className="image" src={contact.image} />
                    </div>
                </header>

                <section className="contact-info">
                    <div className="info-line">
                        <i className="fas fa-phone icon-gradient" t></i>
                        <p className="telefono">{contact.phone}</p>
                    </div>

                    <div className="info-line">
                        <i className="fas fa-sms icon-gradient"></i>
                        <p className="SMS">Amigo/a</p>
                    </div>
                    <div className="info-line">
                        <i className="fas fa-envelope icon-gradient"></i>
                        <p className="mail">{contact.email}</p>
                    </div>
                    <div className="info-line">
                        <i id="location" className="fas fa-map-marker-alt icon-gradient location"></i>
                        <p className="direccion">{contact.address}</p>
                    </div>
                </section>

                <Link to={{pathname: '/edit',
									profileProps: {
										contact_id: contact.id,
                                        contact_name: contact.name,
                                        user_id: location.profileProps.user_id
									}
								}}>
                    <section className="edit-contact">
                        <div className="edit-button">
                            <i className="fas fa-cog icon-gradient"></i>
                        </div>
                    </section>
                </Link>
            </div>
        )
}

export default Perfil;

