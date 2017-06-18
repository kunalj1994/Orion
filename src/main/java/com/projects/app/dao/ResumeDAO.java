package com.projects.app.dao;

import com.projects.app.model.Description;
import com.projects.app.model.Experience;

import java.util.List;

/**
 * Created by kjaiswa3 on 6/4/2017.
 */
public interface ResumeDAO {

   List<Experience> listExperience();
   List<Description> listDescription();
}
