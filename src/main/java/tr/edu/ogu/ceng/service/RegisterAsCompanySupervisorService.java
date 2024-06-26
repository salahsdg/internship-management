package tr.edu.ogu.ceng.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;
import tr.edu.ogu.ceng.dto.CompanySupervisorDto;
import tr.edu.ogu.ceng.dto.UserDto;
import tr.edu.ogu.ceng.dto.requests.RegisterAsCompanySupervisorRequestDto;
import tr.edu.ogu.ceng.dto.responses.RegisterAsCompanySupervisorResponseDto;
import tr.edu.ogu.ceng.enums.UserType;
import tr.edu.ogu.ceng.model.CompanySupervisor;
import tr.edu.ogu.ceng.model.User;
import tr.edu.ogu.ceng.service.Exception.PasswordsNotMatchedException;

@Service
@AllArgsConstructor
public class RegisterAsCompanySupervisorService {

	private final CompanySupervisorService companySupervisorService;
	private final UserService userService;
	private final ModelMapper mapper;

	@Transactional
	public RegisterAsCompanySupervisorResponseDto register(RegisterAsCompanySupervisorRequestDto request) {

		checkIfPasswordsMatchingValidation(request);

		UserDto userDto = mapper.map(request, UserDto.class);
		userDto.setUserType(UserType.COMPANYSUPERVISOR);

		ModelMapper modelMapper = new ModelMapper();
		User user = modelMapper.map(userDto, User.class);
		User createdUser = userService.saveUser(user);

		CompanySupervisorDto companySupervisorDto = mapper.map(request, CompanySupervisorDto.class);
		CompanySupervisor companySupervisor = modelMapper.map(companySupervisorDto, CompanySupervisor.class);
		companySupervisor.setUser(createdUser);
		CompanySupervisor createdCompanySupervisor = companySupervisorService.add(companySupervisor);

		RegisterAsCompanySupervisorResponseDto response = mapper.map(createdCompanySupervisor,
				RegisterAsCompanySupervisorResponseDto.class);
		response.setUsername(createdUser.getUsername());
		response.setEmail(createdUser.getEmail());
		response.setUserType(createdUser.getUserType());

		return response;
	}

	private void checkIfPasswordsMatchingValidation(RegisterAsCompanySupervisorRequestDto request) {
		if (!request.getPassword().toString().equals(request.getConfirmPassword().toString()))
			throw new PasswordsNotMatchedException();
	}

}