package tr.edu.ogu.ceng.dto.responses;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tr.edu.ogu.ceng.dto.FacultyDto;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponseDto {
	private Long id;
	private String name;
	private String surname;
	private String tckn;
	private String grade;
	private String studentNo;
	private String phoneNumber;
	private String birthPlace;
	private Timestamp birthDate;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
	private UserResponseDto user;
	private FacultyDto faculty;
	private String address;
}
