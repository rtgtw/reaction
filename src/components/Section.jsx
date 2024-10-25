
//We are using this Section component like a template, 
//for other components that we build in the future
export default function Section({title, children, ...props}){

    return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
    )
}