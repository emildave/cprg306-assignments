export default function Item(props) {
    return (
        <main>
            <section className='m-2 bg-violet-100 p-3'>
            <h2 className='text-xl font-bold text-violet-900'>{props.name}</h2>
            <p>Buy {props.quantity} in {props.category}</p>
            </section>
        </main>
    );
}
