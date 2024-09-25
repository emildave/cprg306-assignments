import Link from 'next/link';

export default function Page() {
  return (
    <main class name='flex flex-col gap-5'>
      <h1 className="text-text text-4xl font-bold">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="flex flex-col gap-2 mt-5">
        <Link href='./week-2' className={button}>Week 2</Link>
        <Link href='./week-3' className={button}>Week 3</Link>
        <Link href='./week-4' className={button}>Week 4</Link>
      </ul>
    </main>
  );
}

const button =
  "px-3 py-2 text-text text-lg hover:text-lg bg-primary w-fit hover:bg-secondary font-bold";