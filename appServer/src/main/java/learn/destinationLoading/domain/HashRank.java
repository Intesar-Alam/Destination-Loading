package learn.destinationLoading.domain;

import java.util.*;

public class HashRank<T>{

    private HashMap<Integer, ArrayList<T>> rankedMap;

    public HashRank() {
        this.rankedMap = new HashMap<>();
    }

    public HashRank(HashMap<Integer, ArrayList<T>> rankedMap) {
        this.rankedMap = rankedMap;
    }

    public HashRank(HashRank<T> rank) {
        for(Map.Entry<Integer, ArrayList<T>> entry: rank.getHashMap().entrySet()){
            this.rankedMap.put(entry.getKey(), entry.getValue());
        }
    }

    public HashRank<T> rank(ArrayList<T> items) {
        int limit = rankedMap.size();
        for(T item: items) {
            //checks to see if item is already in the level
            boolean found = false;
            int level = 0;
            for (Map.Entry<Integer, ArrayList<T>> rank : rankedMap.entrySet()) {
                for (T t : rank.getValue()) {
                    if (t.equals(item)) {
                        found = true;
                        level = rank.getKey();
                        break;
                    }
                }
                if (found){
                    rank.getValue().remove(item);
                    break;
                }
            }
            //If fist level does not exist it get's created here.
            if(level + 1 > limit){
                limit++;
                rankedMap.put(limit, new ArrayList<T>());
            }
            ArrayList<T> rank = rankedMap.get(level + 1);
            rank.add(item);
            rankedMap.replace(level + 1, rank);
        }
        return this;
    }

    public HashRank<T> rank(T item) {
        return rank((ArrayList<T>) List.of(item));
    }

    public ArrayList<T> toList(){
        ArrayList<T> list = new ArrayList<T>();
        for(ArrayList<T> rank : rankedMap.values()){
            list.addAll(rank);
        }
        return list;
    }

    public boolean isEmpty(){
        return toList().size() < 1;
    }

    public HashMap<Integer, ArrayList<T>> getHashMap() {
        return rankedMap;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HashRank)) return false;
        HashRank<?> hashRank = (HashRank<?>) o;
        return rankedMap.equals(hashRank.rankedMap);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rankedMap);
    }
}
