// object destructoring can be used to target the incoming properties of the object
export default function CoreConcepts({ title, description, image }) {

    return <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }