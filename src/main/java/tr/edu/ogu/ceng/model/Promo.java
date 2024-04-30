package tr.edu.ogu.ceng.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "promos")
public class Promo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "year_promo", nullable = false)
    private String yearPromo;

    @Column(name = "nb_registered")
    private int nbRegistered;

    @Column(name = "nb_received")
    private int nbReceived;

    @ManyToOne
    @JoinColumn(name = "faculty_supervisor_id", referencedColumnName = "id")
    private FacultySupervisor facultySupervisor;

    // Ajoutez d'autres champs selon vos besoins
}

