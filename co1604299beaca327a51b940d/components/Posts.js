import React from "react"

export default function Posts (props) {
    return (
    <div className="card">
            <img src={props.item.imageUrl} className ="post--img" />
            <div className="post--hero">
                <div className="hero--head">
                    <img src = "./images/map-marker-512.webp" className ="post--marker"/>
                    <p className="hero--location"> {props.item.location} </p>
                    <a href={props.item.googleMapsUrl} className="post--link">View on Google Maps</a>
                </div>
                <h2 className="prop--country">{props.item.title}</h2>
                <p className="prop--dates"> {props.item.startDate} - {props.item.endDate}</p>
                <p className="prop--paragraph"> {props.item.description}</p>
                
            </div>
            
    </div>
    )
}