/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { ExclamationIcon } from '@heroicons/react/outline';

const DialogModal = ({
    open = true,
    onClose = () => {},
    icon = null,
    title = "Dialog Modal Title",
    body = (<div>This is where the body goes</div>),
    buttons = [(<button key="ok" className='rounded-md bg-primary py-2 px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80'>Ok</button>)]
}) => {

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom rounded-lg
                bg-dark text-left 
                overflow-hidden shadow-xl 
                transform transition-all 
                sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {icon && (
                    <div
                        className="mx-auto flex-shrink-0 flex items-center
                            justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0
                            sm:h-10 sm:w-10"
                    >
                        {icon}
                        {/* <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    </div>
                  )}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg pb-3 leading-6 font-medium text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      {body}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {buttons.map(b => <span key={b}>b</span>)}                
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default DialogModal;