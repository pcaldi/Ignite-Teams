import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
      const storedPlayer = await playerGetByGroup(group);

      const playerAlReadyExists = storedPlayer.filter(player => player.name === newPlayer.name);

      if (playerAlReadyExists.length > 0) { 
        throw new AppError('Essa pessoa já foi adicionada em um time.')
      }

      const storage = JSON.stringify([...storedPlayer, newPlayer])

      await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
      throw (error);
    }
}