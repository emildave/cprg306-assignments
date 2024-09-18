import ItemList from './item-list.js';

export default function Page() {
    return (
        <main className='m-4'>
            <h1 className='text-2xl font-bold text-violet-900'>Shopping List</h1>
            <ItemList/>
        </main>
    );
}
