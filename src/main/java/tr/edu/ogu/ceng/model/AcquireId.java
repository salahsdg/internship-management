package tr.edu.ogu.ceng.model;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class AcquireId implements Serializable {

    @Getter
    @Setter
    private Long internshipId;

    @Getter
    @Setter
    private Long competenceId;

    // D'autres méthodes si nécessaire
}
