package tr.edu.ogu.ceng.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "acquires")
public class Acquire {

    @EmbeddedId
    private AcquireId id;

    @ManyToOne
    @JoinColumn(name = "internship_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Internship internship;

    @ManyToOne
    @JoinColumn(name = "competence_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Competence competence;

    @Column(name = "required_level")
    private String requiredLevel;

    // Ajoutez d'autres champs selon vos besoins
}

