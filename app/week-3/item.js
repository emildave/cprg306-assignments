export default function Item(props) {
    return (
        <main>
            <section className='m-2 bg-violet-200 p-3'>
            <h2 className='text-xl font-bold text-violet-900'>{props.name}</h2>
            <p className='text-violet-900'>Buy {props.quantity} in {props.category}</p>
            </section>
        </main>
    );
}
