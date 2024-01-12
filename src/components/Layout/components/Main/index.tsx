import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main className="flex-1 bg-white border border-slate-150 p-5">
      <Outlet/>
    </main>
  )
}
