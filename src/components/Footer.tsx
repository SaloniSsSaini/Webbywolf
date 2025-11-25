export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>© {new Date().getFullYear()} WEBBYWOLF</div>
        <div className="text-sm">Built by Saloni Saini — Advanced frontend</div>
      </div>
    </footer>
  )
}
