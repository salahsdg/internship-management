import React, { useEffect, useState, ReactNode } from 'react';
import { Internship } from '../types/InternshipType';
import Modal from '../components/StudentInfo';
import { InternshipDocument } from './InternshipDocument';
import InternshipEvaluateForm from '../components/InternshipEvaluateForm';

export const InternshipRow = ({ internship, company }: { internship: Internship, company: number }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [popUpScreen, setPopUpScreen] = useState<ReactNode>(<></>);
  const [popUpState, setPopUpState] = useState<boolean>(false);

  const getStatusColor = (status: string) => {
    const statusClasses: { [key: string]: string } = {
      APPROVED: 'bg-green-200 p-20 rounded-full',
      REJECTED: 'bg-red-200 p-20 rounded-full',
      PENDING: 'bg-yellow-200 p-20 rounded-full',
    };

    return statusClasses[status] || '';
  };

  const handleButtonHover = (buttonName: string | null) => {
    setHoveredButton(buttonName);
  };
  const handleStudentInfo = () => {
    setPopUpState(true);
    console.log('Running handleStudentInfo');
    setPopUpScreen(
      <Modal
        _student={internship.student}
        isOpen={popUpState}
        onClose={onClosePopUp}
      ></Modal>
    );
  };
  const handleInternshipBooks = (internship_id: number) => {
    setPopUpState(true);
    console.log('Running handleInternshipBooks');
    setPopUpScreen(<InternshipDocument internship_id={internship_id} />);

  };
  const handleCompanyEvaluation = () => {
    setPopUpState(true);
    console.log('Running handleCompanyEvaluation');
    setPopUpScreen(
      <InternshipEvaluateForm
       _internshipId={internship.id}
       _companyId={company}
        isOpen={popUpState}
        onClose={onClosePopUp}
      ></InternshipEvaluateForm>
    );

  };
  const onClosePopUp = () => {
    setPopUpState(false);
  };

  const buttonHoverPopUp = (hoverText: string | null) => {
    return (
      <>
        <svg
          className="absolute left-1/2 top-4 ml-1 mt-2 hidden -translate-x-1/2 md:inline-block "
          viewBox="0 0 20 20"
        >
          <path d="M10 0L20 20H0L10 0Z" fill=" bg-indigo-500" />
        </svg>
        <span
          className={`whitespace-no-wrap absolute left-1/2 top-8 ml-1 hidden -translate-x-1/2 rounded-md bg-indigo-500 px-2 py-1 text-xs text-white opacity-100 transition-opacity duration-300 md:inline-block`}
          style={{ top: 'calc(100% + 8px)' }}
        >
          {hoverText}
        </span>
      </>
    );
  };

  return (
    <tr>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {internship.student.name}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {internship.student.surname}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">{internship.days}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {new Date(internship.startDate).toLocaleDateString('en-GB')}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {new Date(internship.endDate).toLocaleDateString('en-GB')}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <span
          className={`relative inline-block px-3 py-1 font-semibold leading-tight ${getStatusColor(
            internship.status
          )}`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full opacity-50"
          ></span>
          <span className="relative">{internship.status}</span>
        </span>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <div className="flex space-x-3">
          <button
            className="relative text-indigo-600 hover:text-indigo-900"
            onMouseEnter={() => handleButtonHover('studentInfo')}
            onMouseLeave={() => handleButtonHover(null)}
            onClick={() => handleStudentInfo()}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M2 20C2 14.4772 6.47715 10 12 10C17.5228 10 22 14.4772 22 20"></path>
            </svg>
            {hoveredButton == 'studentInfo' &&
              buttonHoverPopUp('Öğrenci Bilgileri')}
          </button>
          <button
            className="relative text-indigo-600 hover:text-indigo-900"
            onMouseEnter={() => handleButtonHover('internshipBooks')}
            onMouseLeave={() => handleButtonHover(null)}
            onClick={() => handleInternshipBooks(internship.id)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19V5H21V19H9Z"></path>
              <path d="M9 3L9 19"></path>
              <path d="M21 3L9 3"></path>
              <path d="M3 3L3 19"></path>
            </svg>
            {hoveredButton == 'internshipBooks' &&
              buttonHoverPopUp('Staj Defteri')}
          </button>
          <button
            className="relative text-indigo-600 hover:text-indigo-900"
            onMouseEnter={() => handleButtonHover('companyEvaluation')}
            onMouseLeave={() => handleButtonHover(null)}
            onClick={() => handleCompanyEvaluation()}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            {hoveredButton == 'companyEvaluation' &&
              buttonHoverPopUp('Şirket Değerlendirmesi')}
          </button>
        </div>
      </td>
      {popUpState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="z-50 flex flex-col items-center rounded-lg bg-white p-8">
            {popUpScreen}
            <br />
            <button
              className="mt-4 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-600"
              style={{ backgroundColor: '#3A4F7A' }}
              onClick={onClosePopUp}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </tr>
  );
};
