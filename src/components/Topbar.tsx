import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon

} from "@heroicons/react/24/solid";
import { CogIcon, ArrowPathIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function TopBar({ showNav, setShowNav }: any) {

    const links = [
        {
            title: 'Edit',
            icon: <PencilIcon className="h-5 w-5 mr-2" />,
            pathname: '/#',
        },
        {
            title: 'Settings',
            icon: <CogIcon className="h-5 w-5 mr-2" />,
            pathname: '/#',
        },
        {
            title: 'Refresh',
            icon: <ArrowPathIcon className="h-5 w-5 mr-2" />,
            pathname: '/#',
        },
    ]


  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <AdjustmentsHorizontalIcon className="h-8 w-8" />
              {/* <span className="hidden md:block font-medium text-gray-700">
                Options
              </span> */}
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                {links.map(link => (
                    <Menu.Item>
                    <Link
                        href={link.pathname}
                        className="flex hover:bg-black hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                    >
                        {link.icon}
                        {link.title}
                    </Link>
                    </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}