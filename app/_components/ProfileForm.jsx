import Link from "next/link";

const user = {
  fname: "Test",
  lname: "User",
  username: "test.user",
  occupation: "Pharmaceutical Technician",
};
function ProfileForm() {
  return (
    <form className="m-20 place-center font-themeFont w-auto" method="PATCH">
      <div className="md:space-y-12 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile Details
          </h2>

          <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-x-6 gap-y-8 sm:grid-cols-3">
            <div className="row-span-1 col-span-1 sm:col-span-3 ">
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  defaultValue={user?.fname}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="row-span-1 col-span-1 sm:col-span-3 ">
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  defaultValue={user?.lname}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="row-span-1 col-span-1 sm:col-span-3 ">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  defaultValue={user?.username}
                  disabled
                  className="disabled:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="row-span-1 col-span-1 sm:col-span-3 ">
              <label
                htmlFor="occupation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Occupation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  defaultValue={user?.occupation}
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed  sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
