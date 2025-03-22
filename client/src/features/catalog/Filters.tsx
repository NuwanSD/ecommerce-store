import { Box, Button, Paper } from "@mui/material";
import Search from "./Search";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { resetParamas, setBrands, setOrderBy, setTypes } from "./catalogSlice";
import CheckBoxButtons from "../../app/shared/components/CheckBoxButtons";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price: High to low" },
  { value: "price", label: "Price: Low to high" },
];

type Props = {
  filtersData: { brands: string[]; types: string[] };
};

export default function Filters({ filtersData: data }: Props) {
  const { orderBy, brands, types } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data?.brands}
          checked={brands}
          onChange={(items: string[]) => dispatch(setBrands(items))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data?.types}
          checked={types}
          onChange={(items: string[]) => dispatch(setTypes(items))}
        />
      </Paper>
      <Button variant="outlined" onClick={() => dispatch(resetParamas())}>
        Reset filteres
      </Button>
    </Box>
  );
}
