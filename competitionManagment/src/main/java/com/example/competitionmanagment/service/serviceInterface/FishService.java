package com.example.competitionmanagment.service.serviceInterface;

import com.example.competitionmanagment.dto.fish.FishDto;
import com.example.competitionmanagment.entity.Fish;

import java.util.List;
import java.util.Optional;

public interface FishService {

    Optional<Fish> fishSearch(String fishname);

    boolean checkFishWeight(String fishname,float weight);

    List<Fish> FetchFish();

//    FishDto createFish(FishDto fish);
}
