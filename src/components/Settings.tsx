import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export function Settings() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-gray-300 hover:text-white p-2 rounded-full">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">Settings</Dialog.Title>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Theme
              </label>
              <select className="w-full bg-gray-700 text-white rounded-md px-3 py-2">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Font Size
              </label>
              <input 
                type="number" 
                min="12"
                max="24"
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Tab Size
              </label>
              <input 
                type="number"
                min="2"
                max="8"
                className="w-full bg-gray-700 text-white rounded-md px-3 py-2"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">
                Notifications
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Dialog.Close asChild>
              <button className="px-4 py-2 text-gray-400 hover:text-white">
                Cancel
              </button>
            </Dialog.Close>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
              Save Changes
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}