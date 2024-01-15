import React from 'react';
import "../section/Section3.css";

function Section3() {
    return (
        <div className="container MBottom">
            <div className="row">
                <div className="col-xl-1"/>
                <div className="col-xl-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.862665675938!2d69.21498240874843!3d41.23397121648655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6183ea313917%3A0xdc59607ad734d20c!2sPDP%20University!5e1!3m2!1sru!2s!4v1705308359231!5m2!1sru!2s"
                        className="Map" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <div className="col-xl-1"/>

                <div className="col-xl-6">
                    <p className="mapTitle1">Maps</p>
                    <p className="mapTitle2">Find your nearest waste bank</p>
                    <p className="mapText">Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id
                        pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean
                        posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.</p>
                    <div className="search">
                        <p className="searchText">Search your waste bank here!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;