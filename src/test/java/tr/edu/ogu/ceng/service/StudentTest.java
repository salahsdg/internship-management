package tr.edu.ogu.ceng.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import tr.edu.ogu.ceng.dao.FacultyRepository;
import tr.edu.ogu.ceng.dao.StudentRepository;
import tr.edu.ogu.ceng.dao.UserRepository;
import tr.edu.ogu.ceng.dto.requests.StudentRequestDto;
import tr.edu.ogu.ceng.dto.requests.UserRequestDto;
import tr.edu.ogu.ceng.model.Faculty;
import tr.edu.ogu.ceng.model.Student;
import tr.edu.ogu.ceng.model.User;
import tr.edu.ogu.ceng.service.Exception.EntityNotFoundException;

public class StudentTest {

	@Mock
	StudentRepository studentRepository;
	@Mock
	StudentService studentService;
	@Mock
	UserRepository userRepository;
	@Mock
	UserService userService;
	@Mock
	FacultyService facultyService;
	@Mock
	FacultyRepository facultyRepository;
	@Mock
	FacultySupervisorService facultySupervisorService;
	@Mock
	ModelMapper modelMapper;

	@BeforeEach
	public void init() {
		MockitoAnnotations.initMocks(this);
		studentService = new StudentService(studentRepository, userRepository, userService, facultyRepository,
				facultyService, facultySupervisorService, new ModelMapper());
	}

	@Test
	public void when_resultIsNotNull_then_returnValidDTO() {
		when(studentRepository.findById(6L)).thenThrow(new javax.persistence.EntityNotFoundException());

		assertThrows(EntityNotFoundException.class, () -> {
			studentService.getStudent(6L);
		});

	}

	@Test
	void should_save_one_student() {

		// FIXME This test case will be extended to mock all used repository methods
		// like facultyRepository.get etc.
		LocalDateTime dateTime = LocalDateTime.now();
		var savedUser = User.builder().email("test").password("passwordHash").id(1L).username("test").build();
		var SavedStudent = Student.builder().id(6L).name("test").surname("test").tckn("test").studentNo("test")
				.grade("test").phoneNumber("test").birthPlace("test").birthDate(new Timestamp(2000, 01, 01, 0, 0, 0, 0))
				.createDate(dateTime).updateDate(dateTime).faculty(new Faculty()).address("address").build();

		when(userRepository.save(any(User.class))).thenReturn(savedUser);
		when(studentRepository.save(any(Student.class))).thenReturn(SavedStudent);

		var userToSave = UserRequestDto.builder().email("test").password("passwordHash").username("test").build();
		var studentToSave = StudentRequestDto.builder().name("test").surname("test").id(6L).tckn("test")
				.studentNo("test").grade("test").phoneNumber("test").birthPlace("test")
				.birthDate(new Timestamp(2000, 01, 01, 0, 0, 0, 0)).user(userToSave).facultyId(0L).address("address")
				.build();
		var actual = studentService.addStudent(studentToSave);

		assertNotNull(actual);
		assertEquals(studentToSave.getName(), actual.getName());
		assertEquals(studentToSave.getSurname(), actual.getSurname());
		assertEquals(studentToSave.getId(), actual.getId());
		assertEquals(studentToSave.getStudentNo(), actual.getStudentNo());
		assertEquals(studentToSave.getGrade(), actual.getGrade());
		assertEquals(studentToSave.getPhoneNumber(), actual.getPhoneNumber());
		assertEquals(studentToSave.getBirthPlace(), actual.getBirthPlace());
		assertEquals(studentToSave.getBirthDate(), actual.getBirthDate());
		assertEquals(studentToSave.getAddress(), actual.getAddress());
	}

}
