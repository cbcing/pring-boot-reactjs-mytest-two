package com.example.daivd;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by David on 4/15/17.
 */
public class Functoin {
    public static <T> List<T> sorted(Collection<T> collection, Comparator<T> comparator) {
        return new ArrayList<>(collection).stream ().sorted (comparator).collect (Collectors.toList ());
    }
}
