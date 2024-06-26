/** @format */

import React, { useReducer, useEffect, useState } from "react";
import { Student, StudentCreate, Faculty } from "../types/StudentType";

interface State {
    name: string;
    surname: string;
    tckn: string;
    studentNo: string;
    grade: string;
    phoneNumber: string;
    birthPlace: string;
    birthDate: Date;
    user: {
        username: string;
        password: string;
        confirmPassword: string;
        email: string;
        activity: boolean;
    };
    facultyId: string;
    address: string;
    errorMessage: string;
    isErrorVisible: boolean;
}

type Action =
    | { type: "UPDATE_FIELD"; field: string; value: any }
    | { type: "UPDATE_USER_FIELD"; field: string; value: string }
    | { type: "UPDATE_FACULTY_ID"; value: string }
    | { type: "RESET_FORM" };

const initialState: State = {
    name: "",
    surname: "",
    tckn: "",
    studentNo: "",
    grade: "",
    phoneNumber: "",
    birthPlace: "",
    birthDate: new Date(""),
    user: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        activity: true,
    },
    facultyId: "",
    address: "",
    errorMessage: "",
    isErrorVisible: false,
};

interface Props {
    showModal: boolean;
    onShowModal: (showModal: boolean) => void;
    onAddStudents: (Student: StudentCreate) => void;
    faculties: Faculty[];
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "UPDATE_USER_FIELD":
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.field]: action.value,
                },
            };
        case "UPDATE_FACULTY_ID":
            return {
                ...state,
                facultyId: action.value,
            };
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
};

const AddModalForm: React.FC<Props> = ({
    showModal,
    onShowModal,
    onAddStudents,
    faculties
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name.startsWith("user.")) {
            const field = name.split(".")[1];
            dispatch({ type: "UPDATE_USER_FIELD", field, value });
        } else if (name === "facultyId") {
            dispatch({ type: "UPDATE_FACULTY_ID", value });
        } else {
            dispatch({ type: "UPDATE_FIELD", field: name, value });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let isErrorVisible = false;
        const password = state.user.password;
        const confirmPassword = state.user.confirmPassword;
        if (password !== confirmPassword) {
          dispatch({ type: "UPDATE_FIELD", field: "isErrorVisible", value: true });
          dispatch({ type: "UPDATE_FIELD", field: "errorMessage", value: "Şifreler eşleşmiyor!" });
          dispatch({ type: "UPDATE_USER_FIELD", field: "confirmPassword", value: "" });
          isErrorVisible = true;
        }
        if (!isErrorVisible) {
          dispatch({ type: "UPDATE_FIELD", field: "isErrorVisible", value: false });
          dispatch({ type: "RESET_FORM" });
          onAddStudents({ ...state, facultyId: parseInt(state.facultyId) });
          onShowModal(false);
        }
      };

    return (
        <div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2 className="modal-title">Öğrenci Ekle</h2>
                        <div style={{ maxHeight: '80vh', overflowY: 'auto', }}>
                            <div style={{ width: '100%', overflowX: 'auto' }}>
                                {state.isErrorVisible && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <div className="popup-message">{state.errorMessage}</div>
                                            <button className="popup-close" onClick={() => dispatch({ type: "UPDATE_FIELD", field: "isErrorVisible", value: false })}>
                                                Kapat
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="modal-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Ad:
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={state.name}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="surname" className="form-label">
                                            Soyad:
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="surname"
                                            value={state.surname}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            T.C. Kimlik No:
                                        </label>
                                        <input
                                            type="text"
                                            id="tckn"
                                            name="tckn"
                                            value={state.tckn}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Öğrenci No:
                                        </label>
                                        <input
                                            type="text"
                                            id="studentNo"
                                            name="studentNo"
                                            value={state.studentNo}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Not Ortalaması:
                                        </label>
                                        <input
                                            type="text"
                                            id="grade"
                                            name="grade"
                                            value={state.grade}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="facultyId" className="form-label">
                                            Fakülte:
                                        </label>
                                        <select
                                            id="facultyId"
                                            name="facultyId"
                                            value={state.facultyId}
                                            onChange={handleChange}
                                            className="form-input"
                                            required>
                                            <option value="">Seçiniz</option>
                                            {faculties.map((faculty) => (
                                                <option key={faculty.id} value={faculty.id}>
                                                    {faculty.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="form-label">
                                            Telefon Numarası:
                                        </label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={state.phoneNumber}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Doğum Yeri:
                                        </label>
                                        <input
                                            type="text"
                                            id="birthPlace"
                                            name="birthPlace"
                                            value={state.birthPlace}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Doğum Tarihi:
                                        </label>
                                        <input
                                            type="date"
                                            id="birthDate"
                                            name="birthDate"
                                            value={new Date(state.birthDate).toLocaleDateString('en-GB').split('/').reverse().join("-")}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Adres:
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={state.address}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">
                                            Kullanıcı Adı:
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            name="user.username"
                                            value={state.user.username}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user.email"
                                            value={state.user.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">
                                            Şifre:
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="user.password"
                                            value={state.user.password}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirmPassword" className="form-label">
                                            Şifreyi Doğrula:
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="user.confirmPassword"
                                            value={state.user.confirmPassword}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-buttons">
                                        <button type="submit" className="submit-button">
                                            Kaydet
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel-button"
                                            onClick={() => onShowModal(false)}>
                                            İptal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default AddModalForm;