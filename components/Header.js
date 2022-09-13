function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/humphries-profile-photo.jpeg" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Ryan Humphries</h1>
        <p><a className="hover:text-gray-600" href="https://etherscan.io/address/0xbacon.eth">0xbacon.eth</a></p>
      </div>
    </header>
  );
}

export default Header;
