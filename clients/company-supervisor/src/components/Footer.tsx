import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white pb-8 shadow dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-center pt-10 text-center font-light text-gray-500 dark:text-gray-200 sm:pt-6">
          <p>
            © 2023 Kurumsal Java dersi için hazırlanan tüm materyaller Kurumsal
            &quot;Kurumsal Java&quot; şirketine aittir ve telif hakları
            saklıdır. İzinsiz kullanımı yasaktır.
          </p>
        </div>
      </div>
    </footer>
  );
};
