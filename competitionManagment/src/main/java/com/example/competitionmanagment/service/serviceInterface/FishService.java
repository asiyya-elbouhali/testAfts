package com.example.competitionmanagment.service.serviceInterface;

import com.example.competitionmanagment.dto.fish.FishDto;
import com.example.competitionmanagment.entity.Fish;

import java.util.List;
import java.util.Optional;

public interface FishService {

    Optional<Fish> fishSearch(String fishname);

    boolean checkFishWeight(String fishname,float weight);

    List<Fish> FetchFish();
    Optional<Fish> findFishByName(String fishName);

    Fish createFish(FishDto fishDto);

    Fish updateFish(String fishName, FishDto updatedFishDto);

    void deleteFish(String fishName);
//    FishDto createFish(FishDto fish);
}
