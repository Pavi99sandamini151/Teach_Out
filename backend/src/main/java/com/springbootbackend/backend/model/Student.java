package com.springbootbackend.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "Student_Name")
    private String name;
    @Column(name = "Student_Address")
    private String address;
    @Column(name = "Student_Email")
    private String emailId;

    public Student() {

    }
    public Student(String name, String address, String emailId){
        super();
        this.name    = name;
        this.address = address;
        this.emailId = emailId;
    }
    public long getId() {
        return id;
    }
    public void setId(long id){
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
}
